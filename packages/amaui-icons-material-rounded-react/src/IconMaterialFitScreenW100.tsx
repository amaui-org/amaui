import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenW100'

      short_name='FitScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 9V6.8q0-.3-.25-.55Q19.5 6 19.2 6H17v-.7h2.2q.65 0 1.075.425.425.425.425 1.075V9ZM3.3 9V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3H7V6H4.8q-.3 0-.55.25Q4 6.5 4 6.8V9ZM17 18.7V18h2.2q.3 0 .55-.25.25-.25.25-.55V15h.7v2.2q0 .65-.425 1.075-.425.425-1.075.425Zm-12.2 0q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V15H4v2.2q0 .3.25.55.25.25.55.25H7v.7Zm10.6-3.8H8.6q-.625 0-1.062-.438Q7.1 14.025 7.1 13.4v-2.8q0-.625.438-1.063Q7.975 9.1 8.6 9.1h6.8q.625 0 1.063.437.437.438.437 1.063v2.8q0 .625-.437 1.062-.438.438-1.063.438Zm-6.8-.7h6.8q.35 0 .575-.225.225-.225.225-.575v-2.8q0-.35-.225-.575Q15.75 9.8 15.4 9.8H8.6q-.35 0-.575.225-.225.225-.225.575v2.8q0 .35.225.575.225.225.575.225Zm-.8 0V9.8 14.2Z"/>
    </Icon>
  );
});

IconMaterialFitScreenW100.displayName = 'AmauiIconMaterialFitScreenW100';

export default IconMaterialFitScreenW100;
