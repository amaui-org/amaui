import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkRingOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRingOff'

      short_name='PhonelinkRingOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M792 1000 56 264q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM200 353l80 80v383h384l96 96v24q0 33-23.5 56.5T680 1016H280q-33 0-56.5-23.5T200 936V353Zm80 543v40h400v-40H280Zm0-633v-7h400v-40H280v47l-74-75q10-23 29.5-37.5T280 136h400q33 0 56.5 23.5T760 216v160h-80v-40H353l-73-73Zm0 633v40-40Zm641-320q0 50-16 96.5T859 758q-10 13-26.5 13.5T804 760q-11-11-11.5-28t9.5-31q19-27 29-59t10-66q0-34-10-66t-29-59q-10-14-9.5-31t11.5-28q12-12 28.5-11.5T859 394q30 39 46 85.5t16 96.5ZM680 216v40-40Zm101 360q0 32-12.5 61.5T734 690q-5 5-13 8.5t-16 3.5q-17 0-29-12t-12-29q0-8 3.5-16t8.5-13q12-12 18.5-25.5T701 576q0-15-7-30t-18-26q-5-5-8.5-13t-3.5-16q0-17 12-29t29-12q8 0 16 3.5t13 8.5q22 23 34.5 52.5T781 576Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRingOff.displayName = 'AmauiIconMaterialPhonelinkRingOff';

export default IconMaterialPhonelinkRingOff;
