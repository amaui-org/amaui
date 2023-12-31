import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInteractiveSpaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InteractiveSpaceW100'

      short_name='InteractiveSpace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-631q5 5 10.5 5t10.5-5l39-39q5-4.636 5-10.818Q335-687 330-692l-39-39q-5-5-10.5-5t-10.5 5l-39 39q-5 4.636-5 10.818Q226-675 231-670l39 39Zm210 11ZM192-412q-26 0-43-17t-17-43v-296q0-26 17-43t43-17h576q26 0 43 17t17 43v296q0 26-17 43t-43 17H647q.6-7 .8-14 .2-7 .2-14h120q12 0 22-10t10-22v-296q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v296q0 12 10 22t22 10h120q0 7 .2 14t.8 14H192Zm467.882-254Q674-666 684-675.882q10-9.883 10-24Q694-714 684.118-724q-9.883-10-24-10Q646-734 636-724.118q-10 9.883-10 24Q626-686 635.882-676q9.883 10 24 10ZM282-132q-12.75 0-21.375-8.625T252-162v-18q0-20.263 11-37.632Q274-235 293-243q45-20 91.5-30.5T480-284q49 0 95.5 10.5T667-243q19 8 30 25.368 11 17.369 11 37.632v18q0 12.75-8.625 21.375T678-132H282Zm-2-28h400v-20q0-12-7-22t-18-15q-42-19-86-29t-89-10q-45 0-89 10t-86 29q-11 5-18 15t-7 22v20Zm200-184q-37 0-62.5-25.5T392-432q0-37 25.5-62.5T480-520q37 0 62.5 25.5T568-432q0 37-25.5 62.5T480-344Zm0-28q25 0 42.5-17.5T540-432q0-25-17.5-42.5T480-492q-25 0-42.5 17.5T420-432q0 25 17.5 42.5T480-372Zm0-60Zm0 272Z"/>
    </Icon>
  );
});

IconMaterialInteractiveSpaceW100.displayName = 'AmauiIconMaterialInteractiveSpaceW100';

export default IconMaterialInteractiveSpaceW100;
