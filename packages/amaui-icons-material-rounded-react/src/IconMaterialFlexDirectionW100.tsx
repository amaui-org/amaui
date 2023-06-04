import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlexDirectionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexDirectionW100'

      short_name='FlexDirection'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 814V656.396q0-13.396 8.625-21.896T162 626h240q12.75 0 21.375 8.625T432 656v157.604q0 13.396-8.625 21.896T402 844H162q-12.75 0-21.375-8.625T132 814Zm0-318V338.396q0-13.396 8.625-21.896T162 308h240q12.75 0 21.375 8.625T432 338v157.604q0 13.396-8.625 21.896T402 526H162q-12.75 0-21.375-8.625T132 496Zm28 2h244V336H160v162Zm504.867 334Q659 832 654 830q-5-2-10-7L511 690q-4-4-3.5-9.5t4.674-9.674Q516 667 521 667t9 4l121 119V322q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v468l121-119q3.75-3.667 9.375-3.833Q815 667 819.174 671q3.826 3.667 3.826 9.333 0 5.667-4 9.667L686 823q-5 5-10.133 7-5.134 2-11 2Z"/>
    </Icon>
  );
});

IconMaterialFlexDirectionW100.displayName = 'AmauiIconMaterialFlexDirectionW100';

export default IconMaterialFlexDirectionW100;
