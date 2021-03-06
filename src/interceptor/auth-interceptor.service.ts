import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor{


    private static addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
        // If you are calling an outside domain then do not add the token.
        if(!request.url.match(environment.api_url))
        {
            return request;
        }

        // If we do not have a token yet then we should not set the header.
        // Here we could first retrieve the token from where we store it.
        if(localStorage.getItem('token') === null)
        {
            return request;
        }

        // Set the token.
        return request.clone({
            headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        });

    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(req.headers.has('Content-Type'))
        {
            req = req.clone({
                headers: req.headers.set('Content-Type', 'application/json')
            });
        }

        req = AuthHttpInterceptor.addAuthenticationToken(req);

        return next.handle(req);

    }
}