import ConnectService from '~/services/ConnectService'
export const state = () => ({
  isAuthenticated: false,
  accessToken: null,
  eventPathTemp: null,
  userData: {
    data: {}
  }

})
export const mutations = {
  SET_isAuthenticated (state, value) {
    state.isAuthenticated = value
  },
  SET_accessToken (state, value) {
    state.accessToken = value
  },
  SET_eventPathTemp (state, value) {
    state.eventPathTemp = value
  },
  SET_userData (state, payload) {
    state.userData = payload
  }
}

export const actions = {
  set_accessToken ({ commit }, value) {
    localStorage.setItem('accessToken', value)
    commit('SET_accessToken', value)
  },
  fetch_accessToken ({ commit }) {
    commit('SET_accessToken', localStorage.getItem('accessToken'))
  },
  remove_accessToken ({ commit }) {
    localStorage.removeItem('accessToken')
    commit('SET_accessToken', null)
  },

  set_eventPathForUserReturnAfterLogin ({ commit }, value) {
    localStorage.setItem('eventPathTemp', value)
    commit('SET_eventPathTemp', value)
  },
  fetch_eventPathForUserReturnAfterLogin ({ commit }) {
    commit('SET_eventPathTemp', localStorage.getItem('eventPathTemp'))
  },
  remove_eventPathForUserReturnAfterLogin ({ commit }) {
    localStorage.removeItem('eventPathTemp')
    commit('SET_eventPathTemp', null)
  },

  get_userDataFromToken ({ commit, dispatch, state }) {
    return ConnectService.getUserDataFromToken(state.accessToken).then((res) => {
      if (res.data.header.codigo === 0) {
        alert('Erro ao recuperar os dados do usuário: \n' + res.data.header.msg)
        dispatch('remove_accessToken')
      } else if (res.data.header.codigo === 1) {
        commit('SET_userData', res.data.data)
        commit('SET_isAuthenticated', true)
      }
    })
  },
  clear_sso ({ commit, dispatch }) {
    dispatch('remove_accessToken')
    commit('SET_isAuthenticated', false)
    commit('SET_accessToken', null)
    commit('SET_userData', {})
    commit('SET_eventPathTemp', null)
  },

  async setOrFetchTokenAndGetUserData ({ dispatch, state }, token) {
    // set ou fetch Token
    if (token) {
      dispatch('set_accessToken', token.toString())
    } else if (!token) {
      dispatch('fetch_accessToken')
    }

    if (state.accessToken) {
      // validate token
      const obj = { jwt: state.accessToken, clientId: 'cbvid' }
      const validateResp = await ConnectService.validateToken(obj)

      // get userData
      if (!state.isAuthenticated && state.accessToken && validateResp.data.header.codigo === 1) {
        dispatch('get_userDataFromToken')
      } else if (validateResp.data.header.codigo === 0) {
        alert('Erro de validação: \n' + validateResp.data.header.msg)
      }
    }
  },

  setUserData ({ commit, state }, userData) {
    const obj = {}
    if (userData.name) {
      userData.name1 = userData.name
      userData.name2 = userData.familyName
      obj.data = userData
      // get userData
      commit('SET_userData', obj)
      return commit('SET_isAuthenticated', true)
    } else {
      return commit('SET_isAuthenticated', false)
    }
  }
}

export const getters = {
  name1: (state) => {
    if (state.userData.data) {
      if (state.userData.data.name1) {
        return state.userData.data.name1
      }
    }
    return ''
  }
}
