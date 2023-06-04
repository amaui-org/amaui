import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSaveAsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveAsW100'

      short_name='SaveAs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h10.375q.125 0 .25.05t.225.15l2.85 2.85q.1.1.15.225.05.125.05.25v6.1l-.7.7V7.85L16.15 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19h8.825l-.7.7Zm6.2-3.6q.7 0 1.2-.5t.5-1.2q0-.7-.5-1.2t-1.2-.5q-.7 0-1.2.5t-.5 1.2q0 .7.5 1.2t1.2.5ZM7.75 9.7h5.45q.325 0 .538-.213.212-.212.212-.537v-1.2q0-.325-.212-.537Q13.525 7 13.2 7H7.75q-.325 0-.537.213Q7 7.425 7 7.75v1.2q0 .325.213.537.212.213.537.213Zm7.8 11.9q-.1 0-.15-.05-.05-.05-.05-.15v-.125q0-.025.125-.3L20.05 16.4l.5.5-4.575 4.575q-.025.025-.3.125Zm5.6-5.3-.5-.5.75-.75q.1-.1.225-.1t.225.1l.05.05q.1.1.1.225t-.1.225ZM5 19V5v9.625Z"/>
    </Icon>
  );
});

IconMaterialSaveAsW100.displayName = 'AmauiIconMaterialSaveAsW100';

export default IconMaterialSaveAsW100;
