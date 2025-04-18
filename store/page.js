export const state = () => ({
    title: "hi"
})

export const mutations = {
    setTitle(state, title) {
      state.title = title;
    }
}