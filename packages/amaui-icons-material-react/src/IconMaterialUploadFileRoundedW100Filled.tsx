import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUploadFileRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFileRoundedW100Filled'
      short_name='UploadFile'

      {...props}
    >
      <path d="M12 17.4Q12.15 17.4 12.25 17.3Q12.35 17.2 12.35 17.05V12.55L14.375 14.575Q14.475 14.675 14.6 14.675Q14.725 14.675 14.85 14.55Q14.975 14.425 14.975 14.3Q14.975 14.175 14.85 14.05L12.525 11.725Q12.4 11.6 12.275 11.55Q12.15 11.5 12 11.5Q11.85 11.5 11.725 11.55Q11.6 11.6 11.475 11.725L9.125 14.075Q9.025 14.175 9.025 14.3Q9.025 14.425 9.15 14.55Q9.275 14.675 9.4 14.675Q9.525 14.675 9.65 14.55L11.65 12.55V17.05Q11.65 17.2 11.75 17.3Q11.85 17.4 12 17.4ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H14.025Q14.325 3.3 14.6 3.412Q14.875 3.525 15.1 3.75L18.25 6.9Q18.475 7.125 18.587 7.4Q18.7 7.675 18.7 7.975V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM15.05 7.7H18L14.3 4V6.95Q14.3 7.275 14.513 7.487Q14.725 7.7 15.05 7.7Z"/>
    </Icon>
  );
});

IconMaterialUploadFileRoundedW100Filled.displayName = 'AmauiIconMaterialUploadFileRoundedW100Filled';

export default IconMaterialUploadFileRoundedW100Filled;
