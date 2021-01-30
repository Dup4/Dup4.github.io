import { GithubIcon, MailIcon } from '@/pages/icons';
import './index.less';

function getYear(startYear: number) {
    let CurYear = new Date().getFullYear();
    let res: string = startYear.toString();
    if (CurYear > startYear) {
        res = [startYear, '-', CurYear].join('');
    }
    return res;
}

function getBeian(hostname: string) {
    const beianDict = {
        'dup4.cn': '浙ICP备20011170号-3',
        'dup4.top': '浙ICP备20011170号',
    };
    if (Object.keys(beianDict).indexOf(hostname) > -1) {
        return (
            <div>
                <a href="http://www.beian.miit.gov.cn/">
                    {beianDict[hostname]}
                </a>
            </div>
        );
    } else {
        return null;
    }
}

export default function IndexPage() {
    const footer = [
        'Copyright © ',
        getYear(2020),
        ', All rights reserved. @Dup4.',
    ];
    const hostname = window.location.hostname;
    const beian = getBeian(hostname);

    return (
        <>
            <h1>Hello. </h1>
            <p>
                I am Dup4. You probably want to enter my{' '}
                <a id="blog-host" href="#">
                    Blog
                </a>
                . Even though many blog posts have not been moved from the{' '}
                <a href="https://cnblogs.com/Dup4">old blog</a>.
            </p>

            <p>
                If you participate in ICPC or CCPC, my sincere recommendation is
                to use the team wiki to record the team’s training records. For
                instance, you can use <a href="https://wi-ki.top">WI-KI</a>.
                This is the training wiki for our team{' '}
                <a href="https://wi-ki.top/team/1/archives/details/0">TI1050</a>
                .
            </p>

            <p>
                <a
                    className="MuiButtonBase-root MuiIconButton-root"
                    target="_blank"
                    href="https://github.com/Dup4"
                    title="Github"
                    aria-disabled="false"
                    aria-label="go to Github"
                    rel="noreferrer"
                >
                    <span className="MuiIconButton-label">
                        <GithubIcon />
                    </span>
                    <span className="MuiTouchRipple-root"></span>
                </a>

                <a
                    style={{ marginLeft: '10px' }}
                    className="MuiButtonBase-root MuiIconButton-root"
                    aria-disabled="false"
                    aria-label="Contact by email"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto: lyuzhi.pan@gmail.com"
                    title="Email"
                >
                    <span className="MuiIconButton-label">
                        <MailIcon />
                    </span>
                    <span className="MuiTouchRipple-root"></span>
                </a>
            </p>

            <div className="footer">
                <div>{footer}</div>
                {beian}
            </div>
        </>
    );
}
