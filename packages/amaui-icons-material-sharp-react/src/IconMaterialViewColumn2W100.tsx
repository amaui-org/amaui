import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumn2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumn2W100'

      short_name='ViewColumn2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 19.7q-.65 0-1.075-.425-.425-.425-.425-1.075V5.8q0-.65.425-1.075Q14.35 4.3 15 4.3h2.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm-.8-13.9v12.4q0 .3.25.55.25.25.55.25h2.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q17.7 5 17.4 5H15q-.3 0-.55.25-.25.25-.25.55ZM6.6 19.7q-.65 0-1.075-.425Q5.1 18.85 5.1 18.2V5.8q0-.65.425-1.075Q5.95 4.3 6.6 4.3H9q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075Q9.65 19.7 9 19.7ZM5.8 5.8v12.4q0 .3.25.55.25.25.55.25H9q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q9.3 5 9 5H6.6q-.3 0-.55.25-.25.25-.25.55ZM18.2 5H14.2 18.2ZM9.8 5H5.8 9.8Z"/>
    </Icon>
  );
});

IconMaterialViewColumn2W100.displayName = 'AmauiIconMaterialViewColumn2W100';

export default IconMaterialViewColumn2W100;
