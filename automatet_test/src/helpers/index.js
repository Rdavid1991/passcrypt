
const registerButton = '//*[@id="root"]/div/div/div/div/div/form/div[3]/button[2]'
const inputSignUpUser = '//*[@id="root"]/div/div/div/div[1]/div/form/div[2]/input'
const inputSignUpEmail = '//*[@id="root"]/div/div/div/div[1]/div/form/div[1]/input'
const inputSignUpPassword1 = '//*[@id="root"]/div/div/div/div[1]/div/form/div[3]/input'
const inputSignUpPassword2 = '//*[@id="root"]/div/div/div/div[1]/div/form/div[4]/input'
const buttonSignUpRegister = '//*[@id="root"]/div/div/div/div[1]/div/form/div[5]/button[1]'
const buttonSignUpConfirm = '//*[@id="confirm"]/div/div/div/div/button'
const inputSignInUser = '//*[@id="root"]/div/div/div/div/div/form/div[1]/input'
const inputSignInPassword = '//*[@id="root"]/div/div/div/div/div/form/div[2]/input'
const buttonSignInConect = '//*[@id="root"]/div/div/div/div/div/form/div[3]/button[1]'
const buttonAddPassword = '//*[@id="root"]/div/div/div/div/div[1]/button[1]'
const inputFormService = '//*[@id="modal-form"]/div/div/div[2]/form/div[1]/input'
const inputFormUser = '//*[@id="modal-form"]/div/div/div[2]/form/div[2]/input'
const inputFormPassword = '//*[@id="modal-form"]/div/div/div[2]/form/div[3]/input'
const buttonFormSave = '//*[@id="modal-form"]/div/div/div[2]/form/div[4]/button[2]'
const buttonFormClose ='//*[@id="modal-form"]/div/div/div[2]/form/div[4]/button[1]'
const messageCharInvalidPassword = '//*[@id="modal-form"]/div/div/div[2]/form/div[3]/small'
const messageCharInvalidUser = '//*[@id="modal-form"]/div/div/div[2]/form/div[2]/small'
const messageCharInvalidService = '//*[@id="modal-form"]/div/div/div[2]/form/div[1]/small'
const buttonTableDelete = '//*[@id="tBody"]/tr/td[5]/div/i[2]'
const buttonTableConfirmNo = '//*[@id="modal-confirm"]/div/div/div/div/button[1]'
const buttonTableConfirmSi = '//*[@id="modal-confirm"]/div/div/div/div/button[2]'




module.exports={
    registerButton,
    inputSignUpUser,
    inputSignUpEmail,
    inputSignUpPassword1,
    inputSignUpPassword2,
    buttonSignUpRegister,
    buttonSignUpConfirm,
    inputSignInUser,
    inputSignInPassword,
    buttonSignInConect,
    buttonAddPassword,
    inputFormService,
    inputFormUser,
    inputFormPassword,
    buttonFormSave,
    buttonFormClose,
    messageCharInvalidPassword,
    messageCharInvalidService,
    messageCharInvalidUser,
    buttonTableDelete,
    buttonTableConfirmNo,
    buttonTableConfirmSi
}