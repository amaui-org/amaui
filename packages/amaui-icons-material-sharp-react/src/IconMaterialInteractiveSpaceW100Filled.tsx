import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInteractiveSpaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InteractiveSpaceW100Filled'

      short_name='InteractiveSpace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-621 61-60-61-60-60 60 60 60Zm379.882-45Q674-666 684-675.882q10-9.883 10-24Q694-714 684.118-724q-9.883-10-24-10Q646-734 636-724.118q-10 9.883-10 24Q626-686 635.882-676q9.883 10 24 10ZM252-132v-48q0-20 11-37.5t30-25.5q45-20 91.5-30.5T480-284q49 0 95.5 10.5T667-243q19 8 30 25.263 11 17.262 11 37.402V-132H252Zm228-212q-37 0-62.5-25.5T392-432q0-37 25.5-62.5T480-520q37 0 62.5 25.5T568-432q0 37-25.5 62.5T480-344Zm-167-68H132v-416h696v416H647q.6-7 .8-14 .2-7 .2-14-3-67-51.5-113.5T480-600q-68 0-116.5 46.5T312-440q0 7 .2 14t.8 14Z"/>
    </Icon>
  );
});

IconMaterialInteractiveSpaceW100Filled.displayName = 'AmauiIconMaterialInteractiveSpaceW100Filled';

export default IconMaterialInteractiveSpaceW100Filled;
