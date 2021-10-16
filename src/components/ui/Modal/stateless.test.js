const rewire = require("rewire")
const stateless = rewire("./stateless")
const renderModal = stateless.__get__("renderModal")
// @ponicode
describe("renderModal", () => {
    test("0", () => {
        let callFunction = () => {
            renderModal()
        }
    
        expect(callFunction).not.toThrow()
    })
})
