import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDictionaryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DictionaryW100Filled'

      short_name='Dictionary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-398h27l22-60h118l22 60h28l-91-242h-36l-90 242Zm60-87 47-127h2l47 127h-96Zm314-95v-28q32-17 69.5-25.5T700-642q21 0 40 2.5t40 7.5v28q-20-6-38.5-8t-41.5-2q-39 0-76.5 8.5T554-580Zm0 218v-30q30-17 69-25.5t77-8.5q21 0 40 2.5t40 7.5v28q-20-6-38.5-8t-41.5-2q-39 0-76.5 9.5T554-362Zm0-108v-30q32-17 69.5-25.5T700-534q21 0 40 2.5t40 7.5v28q-20-6-38.5-8t-41.5-2q-39 0-76.5 9.5T554-470ZM260-318q54 0 105 12.5T466-264v-392q-44-33-98-49.5T260-722q-36 0-60.5 3.5T142-704q-12 4-17 11.5t-5 16.5v350q0 14 10 20.5t22 1.5q18-6 45-10t63-4Zm234 54q50-29 101-41.5T700-318q36 0 63 4t45 10q12 5 22-1.5t10-20.5v-350q0-9-5-16t-17-12q-33-11-57.5-14.5T700-722q-54 0-108 16.5T494-656v392Zm-14 40q-49-32-105-49t-115-17q-28 0-55 3.5T152-274q-22 8-41-6.5T92-320v-358q0-16 8.5-29.5T124-726q32-13 66.5-18.5T260-750q59 0 115 17.5T480-682q49-33 105-50.5T700-750q35 0 69.5 5.5T836-726q15 5 23.5 18.5T868-678v358q0 25-21 38.5t-45 5.5q-25-8-50.5-11t-51.5-3q-59 0-115 17t-105 49Zm-220-94q-36 0-63 4t-45 10q-12 5-22-1.5T120-326v-350q0-9 5-16.5t17-11.5q33-11 57.5-14.5T260-722q54 0 108 16.5t98 49.5v392q-50-29-101-41.5T260-318Z"/>
    </Icon>
  );
});

IconMaterialDictionaryW100Filled.displayName = 'AmauiIconMaterialDictionaryW100Filled';

export default IconMaterialDictionaryW100Filled;
