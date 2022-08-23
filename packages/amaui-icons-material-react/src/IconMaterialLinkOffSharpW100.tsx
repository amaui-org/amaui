import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinkOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkOffSharpW100'
      short_name='LinkOff'

      {...props}
    >
      <path d="M18.35 15.55 17.8 15Q18.75 14.725 19.4 13.887Q20.05 13.05 20.05 12Q20.05 10.725 19.138 9.812Q18.225 8.9 16.95 8.9H13.45V8.2H16.95Q18.525 8.2 19.638 9.312Q20.75 10.425 20.75 12Q20.75 13.275 20.075 14.162Q19.4 15.05 18.35 15.55ZM15.15 12.35 14.45 11.65H15.3V12.35ZM20.7 21.7 2.3 3.3 2.8 2.8 21.2 21.2ZM10.55 15.8H7.05Q5.475 15.8 4.363 14.688Q3.25 13.575 3.25 12Q3.25 10.425 4.363 9.312Q5.475 8.2 7.05 8.2H7.7L8.4 8.9H7.05Q5.775 8.9 4.863 9.812Q3.95 10.725 3.95 12Q3.95 13.275 4.863 14.188Q5.775 15.1 7.05 15.1H10.55ZM8.7 12.35V11.65H11.15L11.825 12.35Z"/>
    </Icon>
  );
});

IconMaterialLinkOffSharpW100.displayName = 'AmauiIconMaterialLinkOffSharpW100';

export default IconMaterialLinkOffSharpW100;
