export interface IDataProps {
  properties: {
    stack: {
      multi_select: [
        {
          name: string;
        }
      ];
    };
    name: {
      title: [
        {
          plain_text: string;
        }
      ];
    };
    desc: {
      rich_text: [
        {
          plain_text: string;
        }
      ];
    };
    logo: {
      files: [
        {
          file?: {
            url: string;
          };
          external?: {
            url: string;
          };
        }
      ];
    };
    skill: {
      title: [
        {
          plain_text: string;
        }
      ];
    };
    link: {
      multi_select: [
        {
          name: string;
        }
      ];
    };
    contact: {
      multi_select: {
        name: string;
      }[];
    };
    intro: {
      rich_text: [{ plain_text: string }];
    };
    category: {
      rich_text: [{ plain_text: string }];
    };
    info: { multi_select: [] };
    screenshotInfo: {
      multi_select: [
        {
          name: string;
        }
      ];
    };
    screenshot: {
      files: [{ file?: { url: string }; external?: { url: string } }];
    };
    img: {
      files: [
        {
          file: { url: string };
        }
      ];
    };
  };
}

export interface IScreenshot {
  file?: {
    url: string;
  };
  external?: {
    url: string;
  };
}

export interface ITabList {
  name: string;
  page: JSX.Element;
}

export interface IStack {
  name: string;
}
