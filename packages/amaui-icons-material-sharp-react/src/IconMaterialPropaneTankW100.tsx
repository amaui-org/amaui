import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPropaneTankW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneTankW100'

      short_name='PropaneTank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20.7q-1.125 0-1.912-.787Q5.3 19.125 5.3 18V9q0-1.125.788-1.912Q6.875 6.3 8 6.3v-3h8v3q1.125 0 1.913.788.787.787.787 1.912v9q0 1.125-.787 1.913-.788.787-1.913.787Zm.7-14.4h6.6V4H8.7Zm2.6 0q0-.275.213-.488.212-.212.487-.212t.488.212q.212.213.212.488ZM6 13.15h12V9q0-.825-.587-1.413Q16.825 7 16 7H8q-.825 0-1.412.587Q6 8.175 6 9ZM8 20h8q.825 0 1.413-.587Q18 18.825 18 18v-4.15H6V18q0 .825.588 1.413Q7.175 20 8 20Zm4-6.85Zm0 .7Zm0-.35Z"/>
    </Icon>
  );
});

IconMaterialPropaneTankW100.displayName = 'AmauiIconMaterialPropaneTankW100';

export default IconMaterialPropaneTankW100;
