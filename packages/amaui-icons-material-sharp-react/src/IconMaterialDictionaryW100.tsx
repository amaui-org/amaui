import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDictionaryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DictionaryW100'

      short_name='Dictionary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-398h27l22-60h118l22 60h28l-91-242h-36l-90 242Zm60-87 47-127h2l47 127h-96Zm20 167q54 0 105 12.5T466-264v-392q-44-33-98-49.5T260-722q-41 0-77.5 6.5T120-693v401q26-12 65-19t75-7Zm234 54q50-29 101-41.5T700-318q36 0 75 7t65 19v-401q-26-16-62.5-22.5T700-722q-54 0-108 16.5T494-656v392Zm-14 40q-49-32-105-49t-115-17q-48 0-92.5 12T92-249v-462q31-18 75-28.5t93-10.5q59 0 115 17.5T480-682q49-33 105-50.5T700-750q49 0 92.5 10.5T868-711v462q-31-17-75.5-29T700-290q-59 0-115 17t-105 49ZM293-493Zm261-87v-28q32-17 69.5-25.5T700-642q21 0 40 2.5t40 7.5v28q-20-6-38.5-8t-41.5-2q-39 0-76.5 8.5T554-580Zm0 218v-30q30-17 69-25.5t77-8.5q21 0 40 2.5t40 7.5v28q-20-6-38.5-8t-41.5-2q-39 0-76.5 9.5T554-362Zm0-108v-30q32-17 69.5-25.5T700-534q21 0 40 2.5t40 7.5v28q-20-6-38.5-8t-41.5-2q-39 0-76.5 9.5T554-470Z"/>
    </Icon>
  );
});

IconMaterialDictionaryW100.displayName = 'AmauiIconMaterialDictionaryW100';

export default IconMaterialDictionaryW100;
