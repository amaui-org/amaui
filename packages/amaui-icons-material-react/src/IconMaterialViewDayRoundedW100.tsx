import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewDayRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayRoundedW100'
      short_name='ViewDay'

      {...props}
    >
      <path d="M4.625 18.4Q4.5 18.4 4.4 18.3Q4.3 18.2 4.3 18.05Q4.3 17.9 4.4 17.8Q4.5 17.7 4.65 17.7H19.375Q19.5 17.7 19.6 17.8Q19.7 17.9 19.7 18.05Q19.7 18.2 19.6 18.3Q19.5 18.4 19.35 18.4ZM4.625 6.3Q4.5 6.3 4.4 6.2Q4.3 6.1 4.3 5.95Q4.3 5.8 4.4 5.7Q4.5 5.6 4.65 5.6H19.375Q19.5 5.6 19.6 5.7Q19.7 5.8 19.7 5.95Q19.7 6.1 19.6 6.2Q19.5 6.3 19.35 6.3ZM5.8 14.7Q5.175 14.7 4.738 14.262Q4.3 13.825 4.3 13.2V10.8Q4.3 10.175 4.738 9.737Q5.175 9.3 5.8 9.3H18.2Q18.825 9.3 19.263 9.737Q19.7 10.175 19.7 10.8V13.2Q19.7 13.825 19.263 14.262Q18.825 14.7 18.2 14.7ZM5.8 14H18.2Q18.55 14 18.775 13.775Q19 13.55 19 13.2V10.8Q19 10.45 18.775 10.225Q18.55 10 18.2 10H5.8Q5.45 10 5.225 10.225Q5 10.45 5 10.8V13.2Q5 13.55 5.225 13.775Q5.45 14 5.8 14ZM5 10H5.8Q5.45 10 5.225 10.225Q5 10.45 5 10.8V13.2Q5 13.55 5.225 13.775Q5.45 14 5.8 14H5Q5 14 5 13.775Q5 13.55 5 13.2V10.8Q5 10.45 5 10.225Q5 10 5 10Z"/>
    </Icon>
  );
});

IconMaterialViewDayRoundedW100.displayName = 'AmauiIconMaterialViewDayRoundedW100';

export default IconMaterialViewDayRoundedW100;
