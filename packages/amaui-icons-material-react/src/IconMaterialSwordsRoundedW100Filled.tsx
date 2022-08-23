import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwordsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordsRoundedW100Filled'
      short_name='Swords'

      {...props}
    >
      <path d="m18.775 20.425-3.1-3.1-2.2 2.2-.15-.15q-.425-.425-.425-1.05t.425-1.05l4.05-4.05q.425-.425 1.05-.425t1.05.425l.15.15-2.2 2.2 3.1 3.1q.225.225.225.525 0 .3-.225.525l-.7.7q-.225.225-.525.225-.3 0-.525-.225ZM20.7 5.35 9.75 16.325l.925.925q.425.425.425 1.05t-.425 1.05l-.15.15-2.2-2.2-3.1 3.1q-.225.225-.525.225-.3 0-.525-.225l-.7-.7q-.225-.225-.225-.525 0-.3.225-.525l3.1-3.1-2.2-2.2.15-.15q.425-.425 1.05-.425t1.05.425l.95.95L18.55 3.2h2.15ZM7.85 9.925 3.3 5.35V3.2h2.15l4.525 4.55Z"/>
    </Icon>
  );
});

IconMaterialSwordsRoundedW100Filled.displayName = 'AmauiIconMaterialSwordsRoundedW100Filled';

export default IconMaterialSwordsRoundedW100Filled;
