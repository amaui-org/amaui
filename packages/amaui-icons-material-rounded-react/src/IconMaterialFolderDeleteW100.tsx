import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteW100'

      short_name='FolderDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.25 16.6h2.5q.45 0 .775-.325t.325-.775v-4.9h.4q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.9q0-.225-.15-.363-.15-.137-.425-.137h-.55q-.275 0-.425.137-.15.138-.15.363h-1.9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h.4v4.9q0 .45.325.775t.775.325Zm0-.7q-.175 0-.287-.113-.113-.112-.113-.287v-4.9h3.3v4.9q0 .175-.112.287-.113.113-.288.113ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .588.125.287.125.487.325l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.35 0 .575-.225Q20 17.55 20 17.2V8.8q0-.35-.225-.575Q19.55 8 19.2 8h-7.475l-.775-.775q-.125-.125-.262-.175Q10.55 7 10.4 7H4.8q-.35 0-.575.225Q4 7.45 4 7.8v9.4q0 .35.225.575Q4.45 18 4.8 18ZM4 18V7v11Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteW100.displayName = 'AmauiIconMaterialFolderDeleteW100';

export default IconMaterialFolderDeleteW100;
