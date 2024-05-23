// Trong file constants/messages.ts

export const AIRPORT_MESSAGES = {
  CODE_MIN_LENGTH: 'Mã sân bay phải có ít nhất 3 ký tự.',
  CODE_MAX_LENGTH: 'Mã sân bay không được vượt quá 10 ký tự.',
  NAME_MIN_LENGTH: 'Tên sân bay phải có ít nhất 3 ký tự.',
  NAME_MAX_LENGTH: 'Tên sân bay không được vượt quá 50 ký tự.',
  ADDRESS_MIN_LENGTH: 'Địa chỉ sân bay phải có ít nhất 3 ký tự.',
  ADDRESS_MAX_LENGTH: 'Địa chỉ sân bay không được vượt quá 100 ký tự.',
  CITY_MIN_LENGTH: 'Tên thành phố phải có ít nhất 2 ký tự.',
  CITY_MAX_LENGTH: 'Tên thành phố không được vượt quá 50 ký tự.',
  AIRPORT_CREATED_SUCCESSFULLY: 'Sân bay được tạo thành công',
  AIRPORT_UPDATED_SUCCESSFULLY: 'Sân bay được cập nhật thành công',
  AIRPORT_DELETED_SUCCESSFULLY: 'Sân bay được xóa thành công',
  AIRPORT_FETCHED_SUCCESSFULLY: 'Sân bay được truy xuất thành công',
  AIRPORT_NOT_FOUND: 'Không tìm thấy sân bay'
}

export const CITY_MESSAGES = {
  NAME_MIN_LENGTH: 'Tên thành phố phải có ít nhất 3 ký tự.',
  NAME_MAX_LENGTH: 'Tên thành phố không được vượt quá 50 ký tự.',
  COUNTRY_MIN_LENGTH: 'Tên quốc gia phải có ít nhất 3 ký tự.',
  COUNTRY_MAX_LENGTH: 'Tên quốc gia không được vượt quá 50 ký tự.',
  CITY_CREATED_SUCCESSFULLY: 'Thành phố được tạo thành công',
  CITY_UPDATED_SUCCESSFULLY: 'Thành phố được cập nhật thành công',
  CITY_DELETED_SUCCESSFULLY: 'Thành phố được xóa thành công',
  CITY_FETCHED_SUCCESSFULLY: 'Thành phố được truy xuất thành công',
  CITY_NOT_FOUND: 'Không tìm thấy thành phố'
}
export const FLIGHT_ROUTE_MESSAGES = {
  FLIGHT_ROUTE_CREATED_SUCCESSFULLY: 'Tuyến bay được tạo thành công',
  FLIGHT_ROUTE_UPDATED_SUCCESSFULLY: 'Tuyến bay được cập nhật thành công',
  FLIGHT_ROUTE_DELETED_SUCCESSFULLY: 'Tuyến bay được xóa thành công',
  FLIGHT_ROUTE_FETCHED_SUCCESSFULLY: 'Tuyến bay được lấy thành công',
  FLIGHT_ROUTE_NOT_FOUND: 'Không tìm thấy tuyến bay'
}

export const FLIGHT_MESSAGES = {
  FLIGHT_CREATED_SUCCESSFULLY: 'Chuyến bay đã được tạo thành công',
  FLIGHT_UPDATED_SUCCESSFULLY: 'Chuyến bay đã được cập nhật thành công',
  FLIGHT_DELETED_SUCCESSFULLY: 'Chuyến bay đã được xóa thành công',
  FLIGHT_FETCHED_SUCCESSFULLY: 'Chuyến bay đã được lấy thành công',
  FLIGHT_NOT_FOUND: 'Không tìm thấy chuyến bay',
  ROUTE_ID_REQUIRED: 'Mã chặng bay là bắt buộc',
  DEPARTURE_TIME_REQUIRED: 'Thời gian khởi hành là bắt buộc',
  ARRIVAL_TIME_REQUIRED: 'Thời gian đến là bắt buộc',
  AIRCRAFT_TYPE_MIN_LENGTH: 'Loại máy bay phải có ít nhất 3 ký tự'
}
// constants/messages.ts
export const TICKET_CLASS_MESSAGES = {
  TICKET_CLASS_CREATED_SUCCESSFULLY: 'Tạo lớp vé thành công',
  TICKET_CLASS_UPDATED_SUCCESSFULLY: 'Cập nhật lớp vé thành công',
  TICKET_CLASS_DELETED_SUCCESSFULLY: 'Xóa lớp vé thành công',
  TICKET_CLASS_FETCHED_SUCCESSFULLY: 'Lấy thông tin lớp vé thành công',
  NAME_MIN_LENGTH: 'Tên phải có ít nhất 3 ký tự',
  NAME_MAX_LENGTH: 'Tên không được vượt quá 50 ký tự'
}
// constants/messages.ts
export const TICKET_MESSAGES = {
  TICKET_CREATED_SUCCESSFULLY: 'Tạo vé thành công',
  TICKET_UPDATED_SUCCESSFULLY: 'Cập nhật vé thành công',
  TICKET_DELETED_SUCCESSFULLY: 'Xóa vé thành công',
  TICKET_FETCHED_SUCCESSFULLY: 'Lấy thông tin vé thành công',
  FLIGHT_ID_REQUIRED: 'Mã chuyến bay là bắt buộc',
  CLASS_ID_REQUIRED: 'Mã hạng vé là bắt buộc',
  CUSTOMER_ID_REQUIRED: 'Mã khách hàng là bắt buộc',
  PURCHASE_DATE_REQUIRED: 'Ngày mua vé là bắt buộc',
  PRICE_MIN_VALUE: 'Giá vé phải lớn hơn hoặc bằng 0'
}
// constants/messages.ts
export const SEAT_MESSAGES = {
  SEAT_CREATED_SUCCESSFULLY: 'Tạo ghế thành công',
  SEAT_UPDATED_SUCCESSFULLY: 'Cập nhật ghế thành công',
  SEAT_DELETED_SUCCESSFULLY: 'Xóa ghế thành công',
  SEAT_FETCHED_SUCCESSFULLY: 'Lấy thông tin ghế thành công',
  FLIGHT_ID_REQUIRED: 'Mã chuyến bay là bắt buộc',
  CLASS_ID_REQUIRED: 'Mã hạng vé là bắt buộc'
}
export const CUSTOMER_MESSAGES = {
  CUSTOMER_CREATED_SUCCESSFULLY: 'Khách hàng được tạo thành công',
  CUSTOMER_UPDATED_SUCCESSFULLY: 'Khách hàng được cập nhật thành công',
  CUSTOMER_DELETED_SUCCESSFULLY: 'Khách hàng được xóa thành công',
  CUSTOMER_FETCHED_SUCCESSFULLY: 'Khách hàng được truy xuất thành công',
  CUSTOMER_NOT_FOUND: 'Không tìm thấy khách hàng',
  NAME_MIN_LENGTH: 'Tên khách hàng phải có ít nhất 3 ký tự',
  NAME_MAX_LENGTH: 'Tên khách hàng không được vượt quá 50 ký tự',
  DATE_OF_BIRTH_REQUIRED: 'Ngày sinh là bắt buộc',
  ID_NUMBER_MIN_LENGTH: 'Số CMND phải có ít nhất 6 ký tự',
  ID_NUMBER_MAX_LENGTH: 'Số CMND không được vượt quá 20 ký tự',
  ID_TYPE_REQUIRED: 'Loại CMND là bắt buộc',
  GENDER_REQUIRED: 'Giới tính là bắt buộc',
  NATIONALITY_REQUIRED: 'Quốc tịch là bắt buộc'
}
