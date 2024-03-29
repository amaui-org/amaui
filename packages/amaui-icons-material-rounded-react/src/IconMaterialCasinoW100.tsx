import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCasinoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasinoW100'

      short_name='Casino'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.25 16.5q.325 0 .538-.225Q9 16.05 9 15.75q0-.325-.212-.538Q8.575 15 8.25 15q-.3 0-.525.212-.225.213-.225.538 0 .3.225.525.225.225.525.225Zm0-7.5q.325 0 .538-.225Q9 8.55 9 8.25q0-.325-.212-.537Q8.575 7.5 8.25 7.5q-.3 0-.525.213-.225.212-.225.537 0 .3.225.525Q7.95 9 8.25 9ZM12 12.75q.325 0 .538-.225.212-.225.212-.525 0-.325-.212-.538-.213-.212-.538-.212-.3 0-.525.212-.225.213-.225.538 0 .3.225.525.225.225.525.225Zm3.75 3.75q.325 0 .538-.225.212-.225.212-.525 0-.325-.212-.538Q16.075 15 15.75 15q-.3 0-.525.212-.225.213-.225.538 0 .3.225.525.225.225.525.225Zm0-7.5q.325 0 .538-.225.212-.225.212-.525 0-.325-.212-.537-.213-.213-.538-.213-.3 0-.525.213Q15 7.925 15 8.25q0 .3.225.525.225.225.525.225ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialCasinoW100.displayName = 'AmauiIconMaterialCasinoW100';

export default IconMaterialCasinoW100;
