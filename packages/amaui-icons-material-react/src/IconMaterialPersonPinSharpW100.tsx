import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonPinSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinSharpW100'
      short_name='PersonPin'

      {...props}
    >
      <path d="M12 21.15 9.55 18.7H4.3V3.3H19.7V18.7H14.45ZM5 17.35Q6.35 16.025 8.138 15.262Q9.925 14.5 12 14.5Q14.075 14.5 15.863 15.262Q17.65 16.025 19 17.35V4H5ZM12 12.1Q13.2 12.1 14.025 11.275Q14.85 10.45 14.85 9.25Q14.85 8.05 14.025 7.225Q13.2 6.4 12 6.4Q10.8 6.4 9.975 7.225Q9.15 8.05 9.15 9.25Q9.15 10.45 9.975 11.275Q10.8 12.1 12 12.1ZM12 11.4Q11.125 11.4 10.488 10.762Q9.85 10.125 9.85 9.25Q9.85 8.375 10.488 7.737Q11.125 7.1 12 7.1Q12.875 7.1 13.512 7.737Q14.15 8.375 14.15 9.25Q14.15 10.125 13.512 10.762Q12.875 11.4 12 11.4ZM12 20.15 14.15 18H18.45V17.85Q17.05 16.5 15.413 15.85Q13.775 15.2 12 15.2Q10.275 15.2 8.625 15.838Q6.975 16.475 5.55 17.8V18H9.85ZM12 10.675Q12 10.675 12 10.675Q12 10.675 12 10.675Q12 10.675 12 10.675Q12 10.675 12 10.675Z"/>
    </Icon>
  );
});

IconMaterialPersonPinSharpW100.displayName = 'AmauiIconMaterialPersonPinSharpW100';

export default IconMaterialPersonPinSharpW100;
