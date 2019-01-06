export const actions = {
    nuxtClientInit({ commit }, context) {
        if(process.server)
            return
    
        if(!context.store.getters['cart/initialized']){
            context.store.commit('cart/initializeStore')
    }
    }
  }