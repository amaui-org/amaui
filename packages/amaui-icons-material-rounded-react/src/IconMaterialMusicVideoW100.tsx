import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideoW100'

      short_name='MusicVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7q-.35 0-.575-.225Q4 17.55 4 17.2V6.8q0-.35.225-.575Q4.45 6 4.8 6q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18Zm0 0h14.4q.35 0 .575-.225Q20 17.55 20 17.2V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18Zm6.175-1.575q.775 0 1.325-.55.55-.55.55-1.325V9h1.8q.275 0 .488-.2.212-.2.212-.5 0-.275-.212-.488-.213-.212-.488-.212H12.9q-.325 0-.537.212-.213.213-.213.538v4.75q-.225-.2-.525-.313-.3-.112-.65-.112-.775 0-1.325.55-.55.55-.55 1.325 0 .775.55 1.325.55.55 1.325.55Z"/>
    </Icon>
  );
});

IconMaterialMusicVideoW100.displayName = 'AmauiIconMaterialMusicVideoW100';

export default IconMaterialMusicVideoW100;
