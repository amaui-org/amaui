import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUploadRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadRoundedW100'
      short_name='Upload'

      {...props}
    >
      <path d="M12 15Q11.85 15 11.75 14.9Q11.65 14.8 11.65 14.65V6.2L9.65 8.2Q9.55 8.3 9.413 8.312Q9.275 8.325 9.15 8.2Q9.025 8.075 9.025 7.95Q9.025 7.825 9.15 7.7L11.475 5.375Q11.6 5.25 11.725 5.2Q11.85 5.15 12 5.15Q12.15 5.15 12.275 5.2Q12.4 5.25 12.525 5.375L14.85 7.7Q14.95 7.8 14.963 7.938Q14.975 8.075 14.85 8.2Q14.725 8.325 14.6 8.325Q14.475 8.325 14.35 8.2L12.35 6.2V14.65Q12.35 14.8 12.25 14.9Q12.15 15 12 15ZM6.8 18.7Q6.15 18.7 5.725 18.275Q5.3 17.85 5.3 17.2V15.35Q5.3 15.2 5.4 15.1Q5.5 15 5.65 15Q5.8 15 5.9 15.1Q6 15.2 6 15.35V17.2Q6 17.5 6.25 17.75Q6.5 18 6.8 18H17.2Q17.5 18 17.75 17.75Q18 17.5 18 17.2V15.35Q18 15.2 18.1 15.1Q18.2 15 18.35 15Q18.5 15 18.6 15.1Q18.7 15.2 18.7 15.35V17.2Q18.7 17.85 18.275 18.275Q17.85 18.7 17.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialUploadRoundedW100.displayName = 'AmauiIconMaterialUploadRoundedW100';

export default IconMaterialUploadRoundedW100;
