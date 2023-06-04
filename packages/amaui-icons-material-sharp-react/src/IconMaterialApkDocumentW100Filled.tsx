import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApkDocumentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkDocumentW100Filled'

      short_name='ApkDocument'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.25 18h7.5q-.075-.925-.55-1.688-.475-.762-1.275-1.212l.725-1.275q.025-.075-.012-.163-.038-.087-.113-.137-.075-.05-.15-.025t-.125.1l-.725 1.3q-.35-.15-.737-.225Q12.4 14.6 12 14.6t-.775.075q-.375.075-.75.225l-.725-1.3q-.05-.075-.137-.1-.088-.025-.163.025-.025 0-.075.3L10.1 15.1q-.8.45-1.288 1.212-.487.763-.562 1.688Zm2.075-1.125q-.15 0-.263-.113-.112-.112-.112-.262 0-.15.112-.262.113-.113.263-.113.15 0 .25.113.1.112.1.262 0 .15-.1.262-.1.113-.25.113Zm3.375 0q-.15 0-.262-.113-.113-.112-.113-.262 0-.15.113-.262.112-.113.262-.113.15 0 .263.113.112.112.112.262 0 .15-.112.262-.113.113-.263.113ZM5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13H18L14.3 4Z"/>
    </Icon>
  );
});

IconMaterialApkDocumentW100Filled.displayName = 'AmauiIconMaterialApkDocumentW100Filled';

export default IconMaterialApkDocumentW100Filled;
