import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSelectCheckBoxRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectCheckBoxRoundedW100'
      short_name='SelectCheckBox'

      {...props}
    >
      <path d="M11.525 16.075 7.3 11.85 7.8 11.35 11.55 15.1 20.225 6.425 20.7 6.9ZM5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.8Q4.3 5.175 4.738 4.737Q5.175 4.3 5.8 4.3H18.2Q18.475 4.3 18.725 4.387Q18.975 4.475 19.175 4.65L18.65 5.175Q18.575 5.1 18.462 5.05Q18.35 5 18.2 5H5.8Q5.45 5 5.225 5.225Q5 5.45 5 5.8V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19H18.2Q18.55 19 18.775 18.775Q19 18.55 19 18.2V11.425L19.7 10.725V18.2Q19.7 18.825 19.263 19.262Q18.825 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialSelectCheckBoxRoundedW100.displayName = 'AmauiIconMaterialSelectCheckBoxRoundedW100';

export default IconMaterialSelectCheckBoxRoundedW100;
