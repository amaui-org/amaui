import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguagePinyinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguagePinyinFilled'

      short_name='LanguagePinyin'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M560 576h80V456h-80v120ZM180 896l-20-80h80V671q-17 7-33 13.5T176 696l-16-78q19-4 39.5-11t40.5-15V456h-60v-80h60V256h80v120h60v80h-60v96q15-9 29-18t27-18v80q-12 10-26 19.5T320 633v263H180Zm222 0-44-66q42-28 72.5-75t42.5-99h-73v-80h80V456h-60v-80h360v80h-60v120h80v80h-80v240h-80V656h-86q-14 71-54.5 136.5T402 896Zm288-490-69-30q16-27 35.5-59t31.5-61l74 27q-15 29-35 62t-37 61Zm-189-8q-17-25-39-55t-42-53l72-34q18 23 38.5 52t37.5 53l-67 37Z"/>
    </Icon>
  );
});

IconMaterialLanguagePinyinFilled.displayName = 'AmauiIconMaterialLanguagePinyinFilled';

export default IconMaterialLanguagePinyinFilled;
