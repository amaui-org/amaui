import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneEnabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledW100'

      short_name='PhoneEnabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 19.55q-.45 0-.75-.3t-.3-.75v-1.95q0-.45.263-.762.262-.313.687-.413l1.7-.35q.35-.075.638.012.287.088.562.363l2.05 2.15q2.35-1.3 4.075-3t3.125-4.05l-2.1-1.925q-.275-.225-.362-.55-.088-.325-.013-.725l.45-2.05q.1-.425.413-.688.312-.262.762-.262h2q.45 0 .75.3t.3.75q0 2.425-1.312 4.95-1.313 2.525-3.375 4.587-2.063 2.063-4.588 3.363-2.525 1.3-4.975 1.3Zm10.4-11.5 2 1.8q.525-1.175.837-2.325.313-1.15.313-2.175 0-.15-.1-.25T18.6 5h-2q-.2 0-.325.1t-.175.3l-.45 2.05q-.05.15-.012.325.037.175.162.275ZM5.4 18.85q.8 0 1.988-.237 1.187-.238 2.212-.763l-1.95-2q-.125-.125-.237-.162-.113-.038-.263.012l-1.7.35q-.2.05-.3.175-.1.125-.1.325v1.95q0 .15.1.25t.25.1Zm4.2-1Zm8.2-8Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledW100.displayName = 'AmauiIconMaterialPhoneEnabledW100';

export default IconMaterialPhoneEnabledW100;
