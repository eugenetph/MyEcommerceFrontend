import React /*{ useState }*/ from 'react';
import './LandingPage.css';


import {
  Layout,
  Input,
  Button
} from 'antd'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout

const LandingPage = () => {
  function handlePageChange() {
    //window.open('LoginPage', "_blank")
  }
  return (
    
    <div>
      <Layout>
        <Header className='main-header'>
          <div className='header'>
            <div>
              <img className='logo' src={require('../../../assets/logo.png')} alt='logo' />
            </div>
            <div style={{ margin: '0 10px'}}>
              <Input className='search' placeholder="Search in MyECommerce" disabled={true} />
            </div>
            <div style={{ margin: '0 10px'}}>
              <Button onClick={handlePageChange()}>Login</Button>
            </div>
          </div>
        </Header>
        <Content className='main-content'>
          <h1>{process.env.REACT_APP_API_HOST}</h1>
          
        </Content>
        <Footer className='main-footer'>
          <h1>Footer</h1>
        </Footer>
      </Layout>
    </div>
  );
}

export default LandingPage;
