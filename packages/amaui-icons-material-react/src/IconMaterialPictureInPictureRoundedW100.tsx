import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureInPictureRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureRoundedW100'
      short_name='PictureInPicture'

      {...props}
    >
      <path d="M12.15 12.6H18.25Q18.575 12.6 18.788 12.387Q19 12.175 19 11.85V7.75Q19 7.425 18.788 7.213Q18.575 7 18.25 7H12.15Q11.825 7 11.613 7.213Q11.4 7.425 11.4 7.75V11.85Q11.4 12.175 11.613 12.387Q11.825 12.6 12.15 12.6ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4.8 18Q4.45 18 4.225 17.775Q4 17.55 4 17.2V6.8Q4 6.45 4.225 6.225Q4.45 6 4.8 6Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18ZM4.8 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2V6.8Q20 6.45 19.775 6.225Q19.55 6 19.2 6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18ZM12.1 11.9V7.7H18.3V11.9Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureRoundedW100.displayName = 'AmauiIconMaterialPictureInPictureRoundedW100';

export default IconMaterialPictureInPictureRoundedW100;
