import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewStreamRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamRoundedW100Filled'
      short_name='ViewStream'

      {...props}
    >
      <path d="M5.8 11.65Q5.175 11.65 4.738 11.212Q4.3 10.775 4.3 10.15V7.8Q4.3 7.175 4.738 6.738Q5.175 6.3 5.8 6.3H18.2Q18.825 6.3 19.263 6.738Q19.7 7.175 19.7 7.8V10.15Q19.7 10.775 19.263 11.212Q18.825 11.65 18.2 11.65ZM5.8 17.7Q5.175 17.7 4.738 17.262Q4.3 16.825 4.3 16.2V13.85Q4.3 13.225 4.738 12.787Q5.175 12.35 5.8 12.35H18.2Q18.825 12.35 19.263 12.787Q19.7 13.225 19.7 13.85V16.2Q19.7 16.825 19.263 17.262Q18.825 17.7 18.2 17.7Z"/>
    </Icon>
  );
});

IconMaterialViewStreamRoundedW100Filled.displayName = 'AmauiIconMaterialViewStreamRoundedW100Filled';

export default IconMaterialViewStreamRoundedW100Filled;
