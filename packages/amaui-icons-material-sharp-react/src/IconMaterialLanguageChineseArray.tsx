import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageChineseArray = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageChineseArray'

      short_name='LanguageChineseArray'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M156 808V596q-11 11-23 21.5T105 641q-8-11-16-21t-17-18q44-31 79.5-69t64.5-84l43 17q-14 24-27.5 43T204 544v264h-48Zm237 0q-12 0-24.5-.5T343 805q-4-17-8-27t-9-18h83q5 0 7.5-2.5t2.5-7.5V554H254v-44h288v45h-75v201q0 17-4 26.5T450 798q-8 5-21 7.5t-36 2.5ZM105 494q-8-9-14.5-18.5T77 456q41-28 70-55.5t49-57.5l45 18q-26 37-60 70t-76 63Zm170-75v-44h253l-2 44H275Zm427 303q28 0 54.5-13t48.5-37V566q-23 3-42.5 7t-36.5 9q-45 14-67.5 35T636 666q0 26 18 41t48 15Zm-23 68q-57 0-90-32.5T556 669q0-52 33-85t106-53q23-6 50.5-11t59.5-9q-2-47-22-68.5T721 421q-26 0-51.5 9.5T604 464l-32-56q33-25 77.5-40.5T740 352q71 0 108 44t37 128v257h-67l-6-45q-28 25-61.5 39.5T679 790Z"/>
    </Icon>
  );
});

IconMaterialLanguageChineseArray.displayName = 'AmauiIconMaterialLanguageChineseArray';

export default IconMaterialLanguageChineseArray;
