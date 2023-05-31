import axios from "axios"
const spiderdevAPI = axios.create({
  baseURL: "https://spider300523-dev-87292.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_test_list(payload) {
  return spiderdevAPI.get(`/api/v1/test/`)
}
function api_v1_test_create(payload) {
  return spiderdevAPI.post(`/api/v1/test/`, payload.data)
}
function api_v1_login_create(payload) {
  return spiderdevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return spiderdevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return spiderdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return spiderdevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return spiderdevAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return spiderdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return spiderdevAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_test_retrieve(payload) {
  return spiderdevAPI.get(`/api/v1/test/${payload.id}/`)
}
function api_v1_test_update(payload) {
  return spiderdevAPI.put(`/api/v1/test/${payload.id}/`, payload.data)
}
function api_v1_test_partial_update(payload) {
  return spiderdevAPI.patch(`/api/v1/test/${payload.id}/`, payload.data)
}
function api_v1_test_destroy(payload) {
  return spiderdevAPI.delete(`/api/v1/test/${payload.id}/`)
}
function rest_auth_logout_retrieve(payload) {
  return spiderdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return spiderdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_registration_create(payload) {
  return spiderdevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return spiderdevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return spiderdevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return spiderdevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return spiderdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_test_list,
  api_v1_test_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  api_v1_test_retrieve,
  api_v1_test_update,
  api_v1_test_partial_update,
  api_v1_test_destroy,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
