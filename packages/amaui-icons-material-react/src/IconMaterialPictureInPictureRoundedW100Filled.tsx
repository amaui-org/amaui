import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureInPictureRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureRoundedW100Filled'
      short_name='PictureInPicture'

      {...props}
    >
      <path d="M12.15 12.6H18.25Q18.575 12.6 18.788 12.387Q19 12.175 19 11.85V7.75Q19 7.425 18.788 7.213Q18.575 7 18.25 7H12.15Q11.825 7 11.613 7.213Q11.4 7.425 11.4 7.75V11.85Q11.4 12.175 11.613 12.387Q11.825 12.6 12.15 12.6ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM15.2 9.8Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureRoundedW100Filled.displayName = 'AmauiIconMaterialPictureInPictureRoundedW100Filled';

export default IconMaterialPictureInPictureRoundedW100Filled;
