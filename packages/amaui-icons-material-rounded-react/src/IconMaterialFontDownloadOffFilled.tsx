import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFontDownloadOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOffFilled'

      short_name='FontDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 19.125-6.4-6.4-2.175-5.75q-.15-.425-.562-.7Q12.45 6 12 6t-.85.275q-.4.275-.575.7l-.2.525-5.5-5.5H20q.825 0 1.413.587Q22 3.175 22 4ZM7.8 18q.275 0 .55-.175t.375-.45l.9-2.425h2.5l-1.75-1.75L8.8 11.625l-1.9 5.05q-.2.55.063.938.262.387.837.387Zm4.75-8.325-.5-1.425h-.1l-.225.6ZM16.2 18q.4 0 .675-.25t.275-.625l-3.075-3.075 1.2 3.3q.125.3.362.475.238.175.563.175Zm3.575 4.575-7.65-7.625 1.95-.9 6.875 6.875q-.25.5-.725.787-.475.288-1.05.288H4q-.825 0-1.412-.587Q2 20.825 2 20V4.825L1.375 4.2q-.3-.3-.3-.713 0-.412.3-.712t.712-.3q.413 0 .713.3l18.4 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOffFilled.displayName = 'AmauiIconMaterialFontDownloadOffFilled';

export default IconMaterialFontDownloadOffFilled;
