import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRainySnowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainySnowW100'

      short_name='RainySnow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m314-221-73-145 25-13 73 145-25 13Zm360 0L481-606l25-13 193 385-25 13Zm-163.965 7Q499-214 491.5-221.465t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5ZM874-221l-33-65 25-13 33 65-25 13ZM434-341 241-726l25-13 193 385-25 13Zm366.035-33Q789-374 781.5-381.465t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Zm-600-80Q189-454 181.5-461.465t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5ZM734-501 621-726l25-13 113 225-25 13Zm-600-80L61-726l25-13 73 145-25 13Zm316.035-113Q439-694 431.5-701.465t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialRainySnowW100.displayName = 'AmauiIconMaterialRainySnowW100';

export default IconMaterialRainySnowW100;
