import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrameReload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameReload'

      short_name='FrameReload'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 776q-57 0-104-28.5T303 671q-7-12-2.5-25.5T318 627q11-5 22 0t17 16q18 33 51 53t72 20q58 0 99-41t41-99q0-58-41-99t-99-41q-28 0-53 10t-45 30h28q13 0 21.5 8.5T440 506q0 13-8.5 21.5T410 536h-90q-17 0-28.5-11.5T280 496v-90q0-13 8.5-21.5T310 376q13 0 21.5 8.5T340 406v27q29-27 65-42t75-15q83 0 141.5 58.5T680 576q0 83-58.5 141.5T480 776ZM200 936q-33 0-56.5-23.5T120 856V736q0-17 11.5-28.5T160 696q17 0 28.5 11.5T200 736v120h120q17 0 28.5 11.5T360 896q0 17-11.5 28.5T320 936H200Zm440 0q-17 0-28.5-11.5T600 896q0-17 11.5-28.5T640 856h120V736q0-17 11.5-28.5T800 696q17 0 28.5 11.5T840 736v120q0 33-23.5 56.5T760 936H640ZM160 456q-17 0-28.5-11.5T120 416V296q0-33 23.5-56.5T200 216h120q17 0 28.5 11.5T360 256q0 17-11.5 28.5T320 296H200v120q0 17-11.5 28.5T160 456Zm640 0q-17 0-28.5-11.5T760 416V296H640q-17 0-28.5-11.5T600 256q0-17 11.5-28.5T640 216h120q33 0 56.5 23.5T840 296v120q0 17-11.5 28.5T800 456Z"/>
    </Icon>
  );
});

IconMaterialFrameReload.displayName = 'AmauiIconMaterialFrameReload';

export default IconMaterialFrameReload;
