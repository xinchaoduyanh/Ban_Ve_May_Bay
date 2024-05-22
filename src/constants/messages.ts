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
