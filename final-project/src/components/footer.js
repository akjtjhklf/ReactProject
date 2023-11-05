import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () =>{
return (
        <footer id="footer" className="pt-4 pb-1 mt-5" style={{backgroundColor: '#71E0CF'}}>
        <div className="d-flex justify-content-evenly">
                    <div style={{color: '#3B3E3E'}}>
                        <h5 className="mb-4 text-capitalize">THÔNG TIN LIÊN HỆ</h5>
                        <div>
                            <p style={{color: '#FAEBD7'}}><i className="bi bi-geo-alt-fill me-2"></i>CS1: 15 Trần Phú, Hoàn
                                Kiếm, HN</p>
                            <p style={{color: '#FAEBD7'}}><i className="bi bi-geo-alt-fill me-2"></i>CS2: 20 Tố Hữu, Hà
                                Đông, HN</p>
                            <p style={{color: '#FAEBD7'}}><i className="bi bi-phone-fill me-2"></i>Hotline: 0123456789</p>
                            <p style={{color: '#FAEBD7'}}><i className="bi bi-envelope-fill me-2"></i>Email:
                                lascent.cs@gmail.com</p>
                        </div>
                    </div>
                    <div style={{color: '#3B3E3E'}}>
                        <h5 className="mb-4">THỜI GIAN LÀM VIỆC</h5>
                        <div>
                            <p style={{color: '#FAEBD7'}}>Thứ 2 - Thứ 6: 8AM - 11PM</p>
                            <p style={{color: '#FAEBD7'}}>Thứ 7, Chủ Nhật: 9AM - 9PM</p>
                            <p style={{color: '#FAEBD7'}}>Nghỉ các ngày lễ, Tết</p>
                        </div>
                    </div>
                    <div style={{color: '#3B3E3E'}}>
                        <h5 className="mb-4">DỊCH VỤ KHÁCH HÀNG</h5>
                        <div>
                            <p style={{color: '#FAEBD7'}}>Câu hỏi thường gặp</p>
                            <p style={{color: '#FAEBD7'}}>Hướng dẫn mua hàng online</p>
                            <p style={{color: '#FAEBD7'}}>Chính sách bảo mật</p>
                            <p style={{color: '#FAEBD7'}}>Liên hệ & góp ý</p>
                        </div>
                    </div>
                    <div style={{color: '#3B3E3E'}}>
                        <h5 className="mb-4">CHÍNH SÁCH MUA HÀNG</h5>
                        <div>
                            <p style={{color: '#FAEBD7'}}>Chính sách bảo hành, đổi trả</p>
                            <p style={{color: '#FAEBD7'}}>Chính sách giao hàng, hoàn hủy</p>
                            <p style={{color: '#FAEBD7'}}>Ưu đãi thẻ thành viên</p>
                        </div>
                    </div>
                </div> 
        </footer>
  );
}
export default Footer;