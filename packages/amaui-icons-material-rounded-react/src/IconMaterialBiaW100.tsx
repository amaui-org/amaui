import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBiaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiaW100'

      short_name='Bia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M266 816v-80q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v80h132v-80q0-6 4.035-10t10-4q5.965 0 9.965 4.025t4 9.975v80h132v-80q0-6 4.035-10t10-4q5.965 0 9.965 4.025t4 9.975v80h154q14 0 23-9t9-23V481q-28 26-74.728 37.5Q678.543 530 629 530q-32 0-64-4.5T506 510H192q-14 0-23 9t-9 23v242q0 14 9 23t23 9h74Zm14-334h179q-14-13-21.5-29t-7.5-37q0-11 2.25-21t6.75-19H312q-14 0-23 9t-9 23v74Zm349.009 20Q691 502 745.5 485.5T800 416q0-53-54.509-69.5t-116.5-16.5Q567 330 512.5 346.5T458 416q0 53 54.509 69.5t116.5 16.5ZM192 844q-24.75 0-42.375-17.625T132 784V542q0-24.75 17.625-42.375T192 482h60v-74q0-24.75 17.625-42.375T312 348h149q29-25 74.626-35.5Q581.252 302 629 302q73 0 136 25.5t63 88.5v368q0 24.75-17.625 42.375T768 844H192Zm74-28h534-640 106Z"/>
    </Icon>
  );
});

IconMaterialBiaW100.displayName = 'AmauiIconMaterialBiaW100';

export default IconMaterialBiaW100;
