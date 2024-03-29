import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFontDownloadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadFilled'

      short_name='FontDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 18q.275 0 .55-.175t.375-.45L9.6 14.95h4.8l.875 2.425q.1.275.362.45.263.175.563.175.575 0 .838-.387.262-.388.062-.938l-3.675-9.7q-.15-.4-.562-.688Q12.45 6 12 6q-.425 0-.85.287-.425.288-.575.688l-3.675 9.7q-.2.55.063.938.262.387.837.387Zm2.4-4.8 1.75-4.95h.1l1.75 4.95ZM4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v16q0 .825-.587 1.413Q20.825 22 20 22Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadFilled.displayName = 'AmauiIconMaterialFontDownloadFilled';

export default IconMaterialFontDownloadFilled;
