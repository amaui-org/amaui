import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSaveOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveOffFilled'

      short_name='FileSaveOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m836-236-56-57 16-16q12-12 28-11.5t28 12.5q11 12 11.5 28T852-252l-16 16Zm-76-77-80-80v-7q0-17 11.5-28.5T720-440q17 0 28.5 11.5T760-400v87ZM553-520 202-870q9-5 18-7.5t20-2.5h247q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v47q0 17-11.5 28.5T720-520H553ZM600 0q-17 0-28.5-11.5T560-40q0-17 11.5-28.5T600-80h167L480-367v167q0 17-11.5 28.5T440-160H240q-33 0-56.5-23.5T160-240v-447L56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11L868-92q5 5 8.5 13t3.5 16v23q0 17-11.5 28.5T840 0H600ZM480-800v140q0 25 17.5 42.5T540-600h140L480-800l200 200-200-200Z"/>
    </Icon>
  );
});

IconMaterialFileSaveOffFilled.displayName = 'AmauiIconMaterialFileSaveOffFilled';

export default IconMaterialFileSaveOffFilled;
