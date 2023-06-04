import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguagePinyinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguagePinyinW100'

      short_name='LanguagePinyin'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M524 593h117V456H524v137ZM220 844l-7-28h73V609q-17 8-35 14l-36 12-4-25q20-6 38.5-13t36.5-15V456h-60v-28h60V308h28v120h40v28h-40v113q14-7 28-15l28-16v29q-14 8-28 15.5T314 597v247h-94Zm179 0-16-23q51-34 80.5-87T496 621h-80v-28h80V456h-60v-28h293v28h-60v137h80v28h-80v223h-28V621H524q-3 68-35.5 126.5T399 844Zm251-413-22-9q14-20 26-40t23-41l23 8q-10 23-23 42.5T650 431Zm-145-13q-13-19-26.5-37.5T451 344l23-11q14 18 27 36t26 37l-22 12Z"/>
    </Icon>
  );
});

IconMaterialLanguagePinyinW100.displayName = 'AmauiIconMaterialLanguagePinyinW100';

export default IconMaterialLanguagePinyinW100;
