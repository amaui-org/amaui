import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewAgendaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaW100'

      short_name='ViewAgenda'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 10.5q-.65 0-1.075-.425Q4.3 9.65 4.3 9V6.6q0-.65.425-1.075Q5.15 5.1 5.8 5.1h12.4q.65 0 1.075.425.425.425.425 1.075V9q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25Q19 9.3 19 9V6.6q0-.3-.25-.55-.25-.25-.55-.25H5.8q-.3 0-.55.25Q5 6.3 5 6.6V9q0 .3.25.55.25.25.55.25Zm0 9.1q-.65 0-1.075-.425Q4.3 18.05 4.3 17.4V15q0-.65.425-1.075Q5.15 13.5 5.8 13.5h12.4q.65 0 1.075.425.425.425.425 1.075v2.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V15q0-.3-.25-.55-.25-.25-.55-.25H5.8q-.3 0-.55.25Q5 14.7 5 15v2.4q0 .3.25.55.25.25.55.25ZM5 5.8V9.8 5.8Zm0 8.4V18.2 14.2Z"/>
    </Icon>
  );
});

IconMaterialViewAgendaW100.displayName = 'AmauiIconMaterialViewAgendaW100';

export default IconMaterialViewAgendaW100;
