import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectToSpeak = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectToSpeak'

      short_name='SelectToSpeak'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M840 575q0 119-69.5 213T589 917q-12 4-20.5-6.5T560 884q0-16 7-30.5t21-20.5q78-32 125-102t47-156q0-86-47-156T588 317q-14-6-21-20.5t-7-30.5q0-16 10.5-26.5T594 234q110 36 178 129.5T840 575ZM280 696H160q-17 0-28.5-11.5T120 656V496q0-17 11.5-28.5T160 456h120l132-132q19-19 43.5-8.5T480 353v446q0 27-24.5 37.5T412 828L280 696Zm280 0V454q0-7 3.5-12.5t8.5-8.5q5-3 11-2.5t11 4.5q32 26 49 62.5t17 78.5q0 41-17 77t-49 62q-5 4-11 4.5t-11-2.5q-5-3-8.5-8.5T560 696Zm-160 6V450l-86 86H200v80h114l86 86ZM40 336V216q0-33 23.5-56.5T120 136h120q17 0 28.5 11.5T280 176q0 17-11.5 28.5T240 216H120v120q0 17-11.5 28.5T80 376q-17 0-28.5-11.5T40 336Zm680 680q-17 0-28.5-11.5T680 976q0-17 11.5-28.5T720 936h120V816q0-17 11.5-28.5T880 776q17 0 28.5 11.5T920 816v120q0 33-23.5 56.5T840 1016H720ZM300 576Z"/>
    </Icon>
  );
});

IconMaterialSelectToSpeak.displayName = 'AmauiIconMaterialSelectToSpeak';

export default IconMaterialSelectToSpeak;
