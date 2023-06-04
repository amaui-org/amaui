import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApkDocument = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkDocument'

      short_name='ApkDocument'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 19h10q-.1-1.225-.75-2.25t-1.7-1.625l.95-1.7q.05-.1.025-.225t-.15-.175q-.1-.05-.212-.025-.113.025-.163.125l-.975 1.75q-.5-.2-1-.313-.5-.112-1.025-.112-.525 0-1.025.112-.5.113-1 .313L9 13.125Q8.95 13 8.838 13q-.113 0-.238.05l-.1.375.95 1.7q-1.05.6-1.7 1.625Q7.1 17.775 7 19Zm2.75-1.5q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15Zm4.5 0q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15ZM4 22V2h10l6 6v14Zm9-13V4H6v16h12V9ZM6 4v5-5 16Z"/>
    </Icon>
  );
});

IconMaterialApkDocument.displayName = 'AmauiIconMaterialApkDocument';

export default IconMaterialApkDocument;
