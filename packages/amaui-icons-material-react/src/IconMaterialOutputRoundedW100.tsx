import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutputRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputRoundedW100'
      short_name='Output'

      {...props}
    >
      <path d="M5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.8Q4.3 5.175 4.738 4.737Q5.175 4.3 5.8 4.3H18.2Q18.825 4.3 19.263 4.737Q19.7 5.175 19.7 5.8V6.65Q19.7 6.8 19.6 6.9Q19.5 7 19.35 7Q19.2 7 19.1 6.9Q19 6.8 19 6.65V5.8Q19 5.45 18.775 5.225Q18.55 5 18.2 5H5.8Q5.45 5 5.225 5.225Q5 5.45 5 5.8V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19H18.2Q18.55 19 18.775 18.775Q19 18.55 19 18.2V17.35Q19 17.2 19.1 17.1Q19.2 17 19.35 17Q19.5 17 19.6 17.1Q19.7 17.2 19.7 17.35V18.2Q19.7 18.825 19.263 19.262Q18.825 19.7 18.2 19.7ZM19.075 12.35H10.5Q10.35 12.35 10.25 12.25Q10.15 12.15 10.15 12Q10.15 11.85 10.25 11.75Q10.35 11.65 10.5 11.65H19.075L16.1 8.65Q16 8.55 16 8.4Q16 8.25 16.1 8.15Q16.2 8.05 16.35 8.05Q16.5 8.05 16.6 8.15L19.9 11.475Q20.125 11.7 20.125 12Q20.125 12.3 19.9 12.525L16.6 15.85Q16.5 15.95 16.35 15.95Q16.2 15.95 16.1 15.85Q16 15.75 16 15.6Q16 15.45 16.1 15.35Z"/>
    </Icon>
  );
});

IconMaterialOutputRoundedW100.displayName = 'AmauiIconMaterialOutputRoundedW100';

export default IconMaterialOutputRoundedW100;
