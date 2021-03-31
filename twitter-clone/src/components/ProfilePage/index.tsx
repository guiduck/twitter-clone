import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton

} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
          <h1>Guilherme Figueiredo</h1>
          <h2>@gui0f</h2>

          <p>
            Developer at <a href='https://github.com/guiduck'></a>
          </p>

          <ul>
            <li>
              <LocationIcon />
              Brasilia, DF
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 14 de maio de 1995 
            </li>
          </ul>
          <Followage>
            <span>
              Seguindo <strong>124</strong>
            </span>
            <span>
              <strong>32 </strong>Seguidores
            </span>
          </Followage>
      </ProfileData>
      {/* <Feed /> */}
    </Container>
    
  );
}

export default ProfilePage;