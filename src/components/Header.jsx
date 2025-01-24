import { useNavigate } from 'react-router-dom';
import BackIcon from '../assets/images/back_button.svg';
import {
  HeaderContainer,
  Title,
  BackButton,
} from '../assets/wrappers/HeaderWrapper';

const Header = ({ title, showBackButton }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {showBackButton && (
        <BackButton src={BackIcon} onClick={() => navigate(-1)} />
      )}
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;
