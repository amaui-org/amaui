import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartScreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartScreenFilled'

      short_name='SmartScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.25 12.75q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.538.212-.212.537-.212.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213Zm-5 0q-.325 0-.537-.213Q7.5 12.325 7.5 12q0-.325.213-.538.212-.212.537-.212.325 0 .538.212Q9 11.675 9 12q0 .325-.212.537-.213.213-.538.213Zm7.5 0q-.325 0-.537-.213Q15 12.325 15 12q0-.325.213-.538.212-.212.537-.212.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213Zm-5 0q-.325 0-.537-.213Q10 12.325 10 12q0-.325.213-.538.212-.212.537-.212.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213ZM3 19q-.825 0-1.412-.587Q1 17.825 1 17V7q0-.825.588-1.412Q2.175 5 3 5h18q.825 0 1.413.588Q23 6.175 23 7v10q0 .825-.587 1.413Q21.825 19 21 19Zm3-2h12V7H6Z"/>
    </Icon>
  );
});

IconMaterialSmartScreenFilled.displayName = 'AmauiIconMaterialSmartScreenFilled';

export default IconMaterialSmartScreenFilled;
